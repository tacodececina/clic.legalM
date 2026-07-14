# Build multi-stage: se compila el sitio Vite y se sirve con Node/Express.
# El build ocurre DENTRO de la imagen (no se hornea dist/ del host ni .env),
# así el despliegue es reproducible desde un git clone limpio en el VPS.

# --- Etapa de build --------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Etapa de runtime ------------------------------------------------------
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3012
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY server.js ./
EXPOSE 3012
CMD ["node", "server.js"]

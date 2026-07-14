// Guard anti-regresión (Fase 1): falla si reaparece una clase Tailwind rota tipo `rounded-2xl-<sufijo>`.
// Tailwind v4 no genera esas utilidades → se renderizan cuadrados donde debería haber radio.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src';
const BROKEN = /rounded-2xl-[a-z0-9]/g;
const hits = [];

function scan(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      scan(p);
    } else if (/\.(tsx?|jsx?|css|html)$/.test(entry)) {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        const m = line.match(BROKEN);
        if (m) hits.push(`${p}:${i + 1}  ${m.join(', ')}`);
      });
    }
  }
}

scan(ROOT);

if (hits.length) {
  console.error(`✗ guard:radius — ${hits.length} clase(s) redondeada(s) rota(s):`);
  hits.forEach((h) => console.error('  ' + h));
  process.exit(1);
}
console.log('✓ guard:radius — sin clases rounded-2xl-* rotas');

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Shield, Cpu, Users, Layers, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';

interface ScopeEstimatorProps {
  onApplyEstimation: (summaryText: string, serviceTitle: string) => void;
}

export default function ScopeEstimator({ onApplyEstimation }: ScopeEstimatorProps) {
  const [profile, setProfile] = useState<'individual' | 'pyme' | 'corporativo'>('pyme');
  const [selectedModules, setSelectedModules] = useState<string[]>(['corp-governance', 'tax-audit']);
  const [urgency, setUrgency] = useState<'normal' | 'alta'>('normal');

  const [estimate, setEstimate] = useState({
    hours: 45,
    teamSize: 2,
    complexity: 'Media',
    actionPlan: 'Estructuración inicial de contratos y mapeo de obligaciones impositivas básicas.'
  });

  const modulesList = [
    { id: 'corp-governance', label: 'Estatutos y Contratos Corporativos', type: 'legal', weight: 20 },
    { id: 'litigation', label: 'Defensa o Litigio Activo', type: 'legal', weight: 35 },
    { id: 'ip-brand', label: 'Protección de Marca y Patentes', type: 'legal', weight: 15 },
    { id: 'tax-audit', label: 'Auditoría Fiscal y Contable', type: 'contable', weight: 25 },
    { id: 'tax-opt', label: 'Optimización Tributaria Estratégica', type: 'contable', weight: 30 },
    { id: 'forensic-psych', label: 'Peritaje o Soporte Psicológico Judicial', type: 'psicologia', weight: 20 },
    { id: 'crisis-mediaton', label: 'Mediación de Conflictos de Socios', type: 'psicologia', weight: 25 }
  ];

  const handleToggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter(m => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  useEffect(() => {
    // Dynamic recalculation engine based on variables
    let baseHours = 0;
    selectedModules.forEach(mid => {
      const mod = modulesList.find(m => m.id === mid);
      if (mod) baseHours += mod.weight;
    });

    // Profile multipliers
    let profileMultiplier = 1.0;
    if (profile === 'individual') profileMultiplier = 0.7;
    if (profile === 'corporativo') profileMultiplier = 1.6;

    let finalHours = Math.round(baseHours * profileMultiplier);
    if (urgency === 'alta') finalHours = Math.round(finalHours * 1.25);

    // Calculate team size
    let teamSize = 1;
    if (finalHours > 30) teamSize = 2;
    if (finalHours > 65) teamSize = 3;
    if (finalHours > 100) teamSize = 4;

    // Define complexity and action plan
    let complexity = 'Moderada';
    if (finalHours > 70) complexity = 'Alta';
    if (finalHours < 30) complexity = 'Estándar';

    let actionPlan = '';
    const hasLegal = selectedModules.some(m => ['corp-governance', 'litigation', 'ip-brand'].includes(m));
    const hasAccounting = selectedModules.some(m => ['tax-audit', 'tax-opt'].includes(m));
    const hasPsychology = selectedModules.some(m => ['forensic-psych', 'crisis-mediaton'].includes(m));

    if (hasLegal && hasAccounting && hasPsychology) {
      actionPlan = 'Acompañamiento corporativo premium con auditoría de estados, blindaje mercantil y apoyo en mediación psicológica ejecutiva.';
    } else if (hasLegal && hasAccounting) {
      actionPlan = 'Auditoría express e implementación de cumplimiento mercantil integral orientada a la reducción legal de contingencias fiscales.';
    } else if (hasLegal) {
      actionPlan = 'Análisis de riesgo regulatorio contractual y defensa jurídica corporativa en instancias procesales prioritarias.';
    } else if (hasAccounting) {
      actionPlan = 'Cierre e ingeniería fiscal orientada a corregir balances contables y planificar el menor impacto impositivo de activos.';
    } else {
      actionPlan = 'Sesiones de contención psicológica, peritaje probatorio para el juzgado o mediación privada de socios.';
    }

    setEstimate({
      hours: finalHours,
      teamSize,
      complexity,
      actionPlan
    });
  }, [profile, selectedModules, urgency]);

  const handleApply = () => {
    const summary = `Estimación Digital (${profile.toUpperCase()}): ${estimate.hours} horas de consultoría interdisciplinar estimadas con un equipo de ${estimate.teamSize} especialistas asignados. Prioridad: ${urgency.toUpperCase()}.`;
    onApplyEstimation(summary, 'Asesoría Integral');
  };

  return (
    <section id="calculadora-section" className="py-24 bg-dark-bg border-t border-dark-border/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3 text-gold-light bg-gold-dark/10 border border-gold-brand/20 px-3.5 py-1 rounded-2xl-full text-xs font-semibold uppercase tracking-widest">
            <Calculator size={13} />
            HERRAMIENTA DE PLANEACIÓN
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Simulador Estratégico de Prácticas
          </h2>
          <p className="font-sans text-dark-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Configure de forma confidencial los módulos de asesoramiento requeridos para estimar la carga de trabajo especializada y la escala de soporte recomendada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Profile Selection */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-widest text-gold-light uppercase flex items-center gap-2">
                <span className="w-5 h-5 bg-gold-dark/20 text-gold-light rounded-2xl-full flex items-center justify-center text-[10px] font-bold">1</span>
                Perfil de la Entidad u Organización
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'individual', title: 'Persona Física', desc: 'Profesionales, herencias, soporte' },
                  { id: 'pyme', title: 'PYME / Startup', desc: 'Estructura ágil, cumplimiento' },
                  { id: 'corporativo', title: 'Corporación', desc: 'Estructuras complejas, auditorías' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProfile(p.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      profile === p.id
                        ? 'border-gold-brand bg-gold-dark/10 text-white'
                        : 'border-dark-border/60 bg-dark-card/40 text-dark-text-muted hover:border-gold-brand/30 hover:bg-dark-card/60'
                    }`}
                  >
                    <p className="font-display text-xs font-bold mb-1">{p.title}</p>
                    <p className="font-sans text-[10px] leading-tight text-dark-text-muted/70">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Practice Modules Selection */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-widest text-gold-light uppercase flex items-center gap-2">
                <span className="w-5 h-5 bg-gold-dark/20 text-gold-light rounded-2xl-full flex items-center justify-center text-[10px] font-bold">2</span>
                Módulos de Asesoramiento Crítico
              </h4>
              <p className="text-[11px] text-dark-text-muted/60 font-sans">
                Seleccione uno o más servicios prioritarios que formarán parte de su plan de acción inicial:
              </p>
              
              <div className="space-y-2.5">
                {modulesList.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => handleToggleModule(mod.id)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'border-gold-brand/40 bg-gold-dark/5 text-white'
                          : 'border-dark-border/40 bg-dark-bg/60 text-dark-text-muted hover:border-dark-border/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by div click
                          className="w-4 h-4 rounded-2xl border-dark-border/60 accent-gold-brand text-dark-bg"
                        />
                        <span className="font-sans text-xs md:text-sm font-medium">{mod.label}</span>
                      </div>
                      <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-2xl ${
                        mod.type === 'legal' ? 'bg-blue-950/40 text-blue-300' :
                        mod.type === 'contable' ? 'bg-amber-950/40 text-amber-300' :
                        'bg-purple-950/40 text-purple-300'
                      }`}>
                        {mod.type}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency / Priority Selection */}
            <div className="space-y-4">
              <h4 className="font-display text-xs font-bold tracking-widest text-gold-light uppercase flex items-center gap-2">
                <span className="w-5 h-5 bg-gold-dark/20 text-gold-light rounded-2xl-full flex items-center justify-center text-[10px] font-bold">3</span>
                Prioridad y Tiempos de Entrega
              </h4>
              <div className="flex gap-4">
                {[
                  { id: 'normal', label: 'Estándar (Plazos Ordinarios)', desc: 'Recomendado para planeaciones estratégicas' },
                  { id: 'alta', label: 'Alta (Intervención Inmediata)', desc: 'Auditorías en curso, notificaciones judiciales' }
                ].map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id as any)}
                    className={`flex-1 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      urgency === u.id
                        ? 'border-gold-brand bg-gold-dark/10 text-white'
                        : 'border-dark-border/40 bg-dark-bg/40 text-dark-text-muted hover:border-gold-brand/30'
                    }`}
                  >
                    <p className="font-display text-xs font-bold mb-1">{u.label}</p>
                    <p className="font-sans text-[10px] text-dark-text-muted/60">{u.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-dark-card border border-dark-border p-8 rounded-2xl-lg relative overflow-hidden space-y-6">
            
            {/* Top Indicator background blur */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-gold-brand/10 rounded-2xl-full blur-2xl pointer-events-none" />

            <div className="border-b border-dark-border/40 pb-4">
              <span className="font-mono text-[9px] font-bold tracking-wider uppercase text-gold-light">
                INFORME DE ESTIMACIÓN DIGITAL
              </span>
              <h3 className="font-display text-lg font-bold text-white mt-1">
                Plan de Soporte Sugerido
              </h3>
            </div>

            {/* Primary Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl">
                <p className="text-[10px] font-bold text-gold-muted uppercase tracking-widest flex items-center gap-1">
                  <Layers size={10} /> Horas Estimadas
                </p>
                <p className="text-3xl font-display font-bold text-white mt-2">
                  {estimate.hours}h
                </p>
                <p className="text-[9px] text-dark-text-muted mt-1">Estimación técnica inicial</p>
              </div>

              <div className="p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl">
                <p className="text-[10px] font-bold text-gold-muted uppercase tracking-widest flex items-center gap-1">
                  <Users size={10} /> Consultores
                </p>
                <p className="text-3xl font-display font-bold text-white mt-2">
                  {estimate.teamSize} <span className="text-sm font-semibold text-dark-text-muted">Socio(s)</span>
                </p>
                <p className="text-[9px] text-dark-text-muted mt-1">Intervención multidisciplinar</p>
              </div>
            </div>

            {/* Technical analysis readout */}
            <div className="space-y-3 font-sans">
              <div className="flex justify-between items-center text-xs">
                <span className="text-dark-text-muted">Nivel de Complejidad:</span>
                <span className="font-bold text-white bg-gold-dark/20 border border-gold-brand/30 px-2.5 py-0.5 rounded-2xl text-[10px] uppercase">
                  {estimate.complexity}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-dark-border/20 pt-2.5">
                <span className="text-dark-text-muted">Práctica líder:</span>
                <span className="font-bold text-white">
                  {selectedModules.includes('litigation') || selectedModules.includes('corp-governance') ? 'Legal y Litigio' : 'Estrategia Fiscal'}
                </span>
              </div>
            </div>

            {/* Strategic Outline Narrative */}
            <div className="p-4 bg-gold-dark/5 border border-gold-brand/20 rounded-2xl font-sans space-y-2">
              <p className="text-[10px] font-bold text-gold-light uppercase tracking-widest flex items-center gap-1.5">
                <Cpu size={12} />
                Hoja de Ruta Recomendada:
              </p>
              <p className="text-xs text-dark-text-muted leading-relaxed">
                {estimate.actionPlan}
              </p>
            </div>

            {/* Apply Action CTA */}
            <div className="pt-4 border-t border-dark-border/30 space-y-3">
              <button
                onClick={handleApply}
                className="w-full bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 shadow-md shadow-gold-brand/10 hover:shadow-gold-brand/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <TrendingUp size={14} />
                Vincular a mi Formulario
              </button>
              <p className="text-[9px] text-center text-dark-text-muted/60">
                *Al hacer clic, la hoja de ruta se exportará directamente a la sección de consulta final para optimizar los tiempos de análisis por el equipo del socio.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

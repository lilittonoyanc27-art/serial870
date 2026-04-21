import React from 'react';
import { 
  Tv, 
  Clock, 
  Users, 
  FileText, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function TVSeriesView() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-amber-500/30 py-12 px-6">
      
      {/* Cinematic Header */}
      <header className="max-w-2xl mx-auto text-center mb-16 space-y-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(217,119,6,0.3)] border-4 border-stone-900">
            <Tv size={32} className="text-white" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">Armenian-Spanish Drama</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">«Հայկական թեյի գաղտնիքը»</h1>
          <p className="text-stone-500 italic text-sm">El secreto del té armenio (Parte 7)</p>
        </div>
        <div className="h-[1px] w-32 bg-stone-800 mx-auto mt-6" />
      </header>

      {/* Script Container */}
      <main className="max-w-2xl mx-auto bg-stone-900/50 border border-stone-800/50 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Film grain effect or subtle texture could go here, but keeping it clean */}
        <div className="relative z-10 space-y-10">
          
          {/* Episode Info */}
          <div className="flex items-center gap-2 text-amber-500/80 font-bold uppercase text-[10px] tracking-widest border-b border-stone-800 pb-4">
            <Sparkles size={14} />
            Մաս 7 — Դոննա Ռոզայի հին սերը
          </div>

          {/* Stage Direction */}
          <section className="bg-stone-950/50 p-6 rounded-2xl border-l-4 border-stone-700 italic text-stone-400 text-sm leading-relaxed space-y-2">
            <p>(Մադրիդյան գրասենյակում օդը կախված է։ Դուռը բացվում է այնպես, կարծես տանգոյի սկիզբ լինի։ Ներս է մտնում Դոննա Ռոզան՝ բրդյա շալով ու Սևանի ուրցի տոպրակով։)</p>
            <p className="text-stone-500 font-sans text-xs opacity-70">(En la oficina de Madrid el aire está tenso. La puerta se abre como si fuera el comienzo de un tango. Entra Doña Rosa con un chal de lana y una bolsa de tomillo de Seván.)</p>
          </section>

          {/* Dialogue: Donna Rosa */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Donna Rosa:
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— ¡Hola, Francisco! (Բարև, Ֆրանսիսկո՛:)</p>
              <p className="text-xl font-medium leading-normal">Դու գիտես (sabés), որ ես չէի կարող բաց թողնել այս պահը։</p>
              <p className="text-stone-500 text-sm italic">(Sabés que no podía perderme este momento.)</p>
              <p className="text-xl font-medium leading-normal">Բերել եմ իսկական ուրցը, որը մենք միասին հավաքում էինք Լոռու սարերում։</p>
              <p className="text-stone-500 text-sm italic">(He traído el tomillo real que solíamos recoger juntos en las montañas de Lorí.)</p>
            </div>
          </div>

          {/* Dialogue: Francisco */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Francisco: <span className="text-stone-500 capitalize font-medium italic">(ձեռքերը դողալով)</span>
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— ¡Doña Rosa! Դուք վերադարձե՞լ եք։</p>
              <p className="text-stone-500 text-sm italic">(¡Doña Rosa! ¿Usted ha vuelto?)</p>
              <p className="text-xl font-medium leading-normal">Իմ սիրտը միշտ գիտեր (sabía), որ այս օրը գալու է։</p>
              <p className="text-stone-500 text-sm italic">(Mi corazón siempre sabía que este día llegaría.)</p>
            </div>
          </div>

          {/* Dialogue: Donna Rosa 2 */}
          <div className="space-y-4 border-t border-stone-800 pt-8">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
               <Users size={14} /> Donna Rosa: <span className="text-stone-500 capitalize font-medium italic">(մոտենալով սեղանին)</span>
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— Ֆրանսիսկո՛, դու պետք է (tenés que) հասկանաս մի բան։</p>
              <p className="text-stone-500 text-sm italic">(Francisco, tenés que entender algo.)</p>
              <p className="text-xl font-medium leading-normal">Այս թեյը միայն խմիչք չէ, սա մեր պատմությունն է։</p>
              <p className="text-stone-500 text-sm italic">(Este té no es solo una bebida, es nuestra historia.)</p>
              <p className="text-xl font-medium leading-normal">Ջուզեպպե՛, դու պետք է (tenés que) զգույշ լինես շաքարամանի հետ։</p>
              <p className="text-stone-500 text-sm italic">(Giuseppe, tenés que tener cuidado con la azucarera.)</p>
            </div>
          </div>

          {/* Dialogue: Giuseppe */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Giuseppe: <span className="text-stone-500 capitalize font-medium italic">(հարգանքով)</span>
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— ¡Sí, señora! Մենք պետք է (debemos) պահպանենք ավանդույթը։</p>
              <p className="text-stone-500 text-sm italic">(¡Sí, señora! Debemos mantener la tradition.)</p>
            </div>
          </div>

          {/* Dialogue: Isabel */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Isabel: <span className="text-stone-500 capitalize font-medium italic">(մի փոքր խանդով)</span>
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— Իսկ հիմա մենք կարող ենք (podemos) վերջապես եփել այդ թեյը՞։</p>
              <p className="text-stone-500 text-sm italic">(¿Y ahora podemos finalmente preparar ese té?)</p>
            </div>
          </div>

          {/* Dialogue: Donna Rosa 3 */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Donna Rosa: <span className="text-stone-500 capitalize font-medium italic">(նայելով Ֆրանսիսկոյի աչքերին)</span>
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— Այո՛, բոլորս միասին կարող ենք (podemos)։</p>
              <p className="text-xl font-medium leading-normal">Բայց նախ, Ֆրանսիսկո՛, դու պետք է (tenés que) խոստանաս, որ այլևս երբեք չես թաքցնի թեյի գդալը։</p>
              <p className="text-stone-500 text-sm italic">(Pero primero, Francisco, tenés que prometer que nunca más vas a esconder la cuchara del té.)</p>
            </div>
          </div>

          {/* Dialogue: Francisco Final */}
          <div className="space-y-4">
            <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest flex items-center gap-2">
              <Users size={14} /> Francisco:
            </h3>
            <div className="space-y-1">
              <p className="text-xl font-medium leading-normal">— Խոստանում եմ, Ռոզա՛։ Առանց քեզ թեյն անհամ է։</p>
              <p className="text-stone-500 text-sm italic">(Lo prometo, Rosa. Sin ti el té no tiene sabor.)</p>
            </div>
          </div>

          {/* Stage Direction 2 */}
          <section className="bg-stone-950/30 p-6 rounded-2xl border-stone-800 italic text-stone-500 text-sm leading-relaxed border border-dashed">
            <p>(Ֆրանսիսկոն լուռ նայում է իր ժամացույցին և դեմքի արտահայտությունը հանկարծ փոխվում է... )</p>
            <p className="text-stone-600 font-sans text-xs">(Francisco mira en silencio su reloj y su expresión cambia de repente...)</p>
          </section>

          {/* Ending */}
          <footer className="text-center pt-8 border-t border-stone-800">
            <div className="inline-block px-12 py-4 bg-white text-stone-950 font-black text-2xl md:text-3xl tracking-widest shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              ¡¡¡CONTINUARÁ...!!!
            </div>
            <p className="text-xs uppercase font-black tracking-[0.5em] text-stone-600 mt-4">(ՇԱՐՈՒՆԱԿԵԼԻ...)</p>
          </footer>

        </div>
      </main>

      {/* Retro TV Overlay Elements */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-2 pointer-events-none opacity-20">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
           <Clock size={12} /> REC 00:42:15
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest">
           CH 07 - Drama
        </div>
      </div>

    </div>
  );
}

import { Zap, Wrench, Package, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function ServiceHighlight({ dict }: { dict: any }) {
    const services = [
        { icon: <Zap className="w-8 h-8" />, title: "Panel Maker", desc: "Produksi panel LVMDP, SDP, Kapasitor Bank sesuai standar keamanan PUIL." },
        { icon: <Wrench className="w-8 h-8" />, title: "Instalasi & Maintenance", desc: "Pemasangan kabel tray, penarikan kabel, serta perawatan berkala gardu induk/trafo." },
        { icon: <Package className="w-8 h-8" />, title: "Trading Komponen", desc: "Supplier resmi part elektrikal merk ternama (Schneider, ABB, Mitsubishi, dll)." },
        { icon: <ShieldCheck className="w-8 h-8" />, title: "Assessment Sistem", desc: "Pengecekan dan audit beban daya kelistrikan pabrik untuk efisiensi energi." }
    ];

    return (
        <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 text-white">
            <ScrollReveal animation="fade">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">{dict.title}</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">{dict.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <ScrollReveal key={i} delay={i * 0.15} animation="slideUp" className="p-6 rounded-xl border border-white/20 hover:bg-white/10 transition-colors">
                                <div className="text-secondary mb-4">{s.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}

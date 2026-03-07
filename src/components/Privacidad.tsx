import React from 'react';

const Privacidad = () => {
  const lastUpdated = "15 de Octubre, 2023"; // Ajusta la fecha

  return (
    <section className="bg-white py-16 px-6 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-500 italic">
            Última actualización: {lastUpdated}
          </p>
        </header>

        {/* Contenido */}
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg mb-6">
            En <strong>Conversion Catalyst</strong>, valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos su información.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Información que Recopilamos</h2>
          <p className="mb-4">
            Recopilamos información que usted nos proporciona directamente cuando se registra en nuestro sitio, realiza un pedido o se suscribe a nuestro boletín informativo. Esto puede incluir:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Nombre y apellidos.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Información de contacto profesional.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Uso de la Información</h2>
          <p className="mb-4">
            La información que recopilamos se utiliza para personalizar su experiencia, mejorar nuestro sitio web y procesar transacciones de manera eficiente.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Protección de Datos</h2>
          <p className="mb-4">
            Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Utilizamos cifrado avanzado y protocolos de transferencia segura (SSL).
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-8 bg-blue-50 text-gray-800 italic">
            No vendemos, intercambiamos ni transferimos a terceros su información de identificación personal sin su consentimiento.
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Sus Derechos</h2>
          <p className="mb-6">
            Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, por favor contáctenos a través de nuestro formulario de contacto.
          </p>
        </div>

        {/* Footer de la página de privacidad */}
        <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-gray-600">
            ¿Tiene dudas sobre nuestra política? 
            <a href="/contacto" className="ml-2 text-blue-600 font-medium hover:underline">
              Contáctenos aquí
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacidad;

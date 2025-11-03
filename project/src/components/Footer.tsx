export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 font-light">
          © {new Date().getFullYear()} Max Mustermann. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

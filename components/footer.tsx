export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Koushal</h3>
            <p className="text-muted-foreground text-sm">
              Engineering precision for the future of industrial automation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-cyan-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-cyan-500 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-500 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Koushal Robotics — All Rights Reserved.</p>
          <p>Designed with passion by Team Koushal.</p>
        </div>
      </div>
    </footer>
  )
}

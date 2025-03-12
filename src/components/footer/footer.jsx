import Link from "next/link"
import { Users, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, IndianRupee } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-bacground text-foreground border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <IndianRupee className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">Gootergoo</span>
            </div>
            <p className="mt-4">
              Simplifying conversation to meet people.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Features</Link></li>
              {/* <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white">Case Studies</Link></li> */}
              <li><Link href="#" className="hover:text-white">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              {/* <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Guides</Link></li>
              <li><Link href="#" className="hover:text-white">Webinars</Link></li> */}
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <Link href="mailto:rkkaishyep@gmail.com" className="hover:text-white">rkkaishyep@gmail.com</Link>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <Link href="tel:+918397895607" className="hover:text-white">+91 8397895607</Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-gray-800 border-gray-700 focus:ring-blue-500"
                />
                <Button className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Gootrgoo. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Key, Lock, BarChart3, Users, Zap, ChevronRight, ExternalLink, Pencil, X, Trash2 } from "lucide-react"
import { Search } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Key className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Dandi</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge variant="outline" className="px-3 py-1">
                Introducing Dandi API Key Management
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Secure API Key Management Made Simple
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Generate, manage, and monitor your API keys with ease. Perfect for developers, teams, and enterprises.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Get Started <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to manage your API keys securely and efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <Key className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>API Key Generation</CardTitle>
                  <CardDescription>
                    Generate secure API keys with customizable permissions and expiration dates.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Enhanced Security</CardTitle>
                  <CardDescription>
                    Role-based access control, IP restrictions, and usage limits for maximum security.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Usage Analytics</CardTitle>
                  <CardDescription>
                    Monitor API key usage with detailed analytics and real-time dashboards.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Team Collaboration</CardTitle>
                  <CardDescription>Collaborate with team members with granular permission controls.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Automation</CardTitle>
                  <CardDescription>
                    Automate key rotation, revocation, and notifications with webhooks and integrations.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <ExternalLink className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>API & SDK</CardTitle>
                  <CardDescription>
                    Integrate with your existing tools using our comprehensive API and SDKs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="dashboard" className="py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Intuitive Dashboard</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Manage all your API keys from a single, powerful dashboard.
              </p>
            </div>
            <div className="mt-12 rounded-lg border bg-[#1a1d21] p-8 shadow-lg text-white max-w-[1000px] mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Key className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">API Keys Dashboard</h3>
                </div>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Sign Out
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search keys..."
                    className="w-full bg-[#2a2d31] border-none rounded-md pl-10 py-2 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-white border-gray-600">
                    All Status
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    + Create New API Key
                  </Button>
                </div>

                <div className="mt-6">
                  <div className="grid grid-cols-12 gap-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                    <div className="col-span-4">NAME</div>
                    <div className="col-span-4">STATUS</div>
                    <div className="col-span-4">ACTIONS</div>
                  </div>
                  
                  {["EIP02", "DBaaS03", "EIP01", "DBaaS02", "DBaaS01", "Test API Key"].map((name) => (
                    <div key={name} className="grid grid-cols-12 gap-4 py-3 border-b border-gray-700">
                      <div className="col-span-4">{name}</div>
                      <div className="col-span-4">
                        <span className="flex items-center gap-1 text-green-500">
                          <CheckCircle2 className="h-4 w-4" />
                          active
                        </span>
                      </div>
                      <div className="col-span-4 flex gap-2">
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-400">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-400">
                          <X className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 max-w-[1000px] mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Key Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create, revoke, and manage API keys with just a few clicks.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Usage Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track API usage, rate limits, and performance in real-time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get notified of suspicious activities and security threats.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-8 md:py-16 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Pricing</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works best for you and your team.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individual developers</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">Forever free</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 5 API keys</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>7-day history</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Popular</Badge>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For small teams</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$29</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited API keys</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>30-day history</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Team management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                  <p className="text-sm text-muted-foreground">Contact sales</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited history</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>SSO & SAML</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about Dandi API Key Management.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-[1000px] gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>How secure is Dandi API Key Management?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dandi uses industry-standard encryption and security practices to protect your API keys. We never
                    store keys in plain text, and all data is encrypted at rest and in transit.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I migrate from another API key management solution?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, we offer migration tools and support to help you transition from other API key management
                    solutions. Our team can assist with the migration process to ensure a smooth transition.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Does the free tier have any limitations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The free tier is limited to 5 API keys and 7 days of history. It's designed for individual
                    developers or small projects. For more advanced features and higher limits, consider upgrading to
                    our Pro or Enterprise plans.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Can I integrate Dandi with my existing tools?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, Dandi offers a comprehensive API and SDKs for popular programming languages, making it easy to
                    integrate with your existing tools and workflows. We also offer webhooks for real-time
                    notifications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of developers and teams who trust Dandi for their API key management.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Sign Up for Free <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col gap-6 md:flex-row md:justify-between max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">Dandi</span>
            </div>
            <p className="text-sm text-muted-foreground">Secure API Key Management for developers and teams.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
                <Link href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link href="/api" className="text-sm text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
                <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 md:h-16 md:flex-row md:pt-0 max-w-[1200px] mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Dandi API Key Management. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
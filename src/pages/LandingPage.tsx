import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Bus, User, Clock, MapPin, Phone, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <Bus className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">BusEase</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="#features">Features</Link>
              <Link to="#about">About</Link>
              <Link to="#contact">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Link to="/login">
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" /> Log in
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to BusEase
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your one-stop solution for hassle-free bus travel. Book
                  tickets, track buses, and manage your journeys with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Real-time Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Know exactly where your bus is and when it will arrive.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Route Planning</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Find the best routes for your journey with our advanced
                  planning tool.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Bus className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-bold">Easy Booking</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Book your tickets in just a few clicks, anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              About Us
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              BusEase is committed to revolutionizing bus travel. We combine
              cutting-edge technology with customer-centric services to make
              your journeys smooth, reliable, and enjoyable.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Contact Us
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@busease.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 BusEase. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="/">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign up for BusEase</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Create your account to get started
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>
          <Button className="w-full">Sign up</Button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link className="text-blue-500 hover:underline" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

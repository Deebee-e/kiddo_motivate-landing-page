"use client"
import React from 'react';
import Link from 'next/link';
export default function NavBar() {



  return (
    <div className="fixed top-0 left-0 w-full bg-white/40 backdrop-blur-lg border-b border-gray-300/30 z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <h4 className="text-xl font-semibold">Kiddo Motivate</h4>

        </div>
        <div>
          <Link href="/">
            <button className="btn btn-active btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

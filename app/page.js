import CarCard from '@/components/car-card'
import HomeSearch from '@/components/home-search'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { bodyTypes, carMakes, faqItems, featuredCars } from '@/lib/data'
import { SignedOut } from '@clerk/nextjs'
import { Calendar, Car, ChevronRight, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import { CarCard} from "@/components/car-card";

const { blue, green } = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue,
        green,
      },
    },
  },
  plugins: [],
}

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#16223c] dotted-background flex flex-col">
      <section className="flex items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 mt-6 ">
            Find Your Dream Car with CarNext AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Advanced AI Car Search and test drive from thousands of vehicles.
          </p>
          <HomeSearch />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2>Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 sd:grid-cols-3 md:grid-cols-4 gap-6">
            {featuredCars.map((car) => {
              return (
                <CarCard key={car.id} car={car}>
                  {/* <img src={car.images[0]} alt={`${car.make} ${car.model}`} /> */}
          {/* </CarCard>
              )
            })}
          </div> */}

          <div className="flex flex-wrap gap-6">
            {featuredCars.map((car) => (
              <div key={car.id} className="flex-1 min-w-[250px]">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-grey-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2>Browser by Make</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => {
              return (
                <Link
                  href={`/cars?make=${make.name}`}
                  key={make.name}
                  className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
                >
                  <div className="h-16 w-16 mx-auto mb-2 relative">
                    <Image
                      src={make.image}
                      alt={make.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    ></Image>
                  </div>
                  <h3 className="font-medium">{make.name}</h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
      
            Why Choose Our Platform
          </h2>
        </div>

        {/* <div className="flex flex-wrap gap-8"> */}
        <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            <div className="flex-1 min-w-0 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Thousands of verified vehicles from trusted dealerships and private sellers
              </p>
            </div>

            <div className="flex-1 min-w-0 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600">
                Verified listings and secure booking process for peace of mind
              </p>
            </div>

            <div className="flex-1 min-w-0 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
              <p className="text-gray-600">
                Book a test drive online in minutes, with flexible scheduling options
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-semibold">Browse by BodyType</h2>
      <Button variant="ghost" className="flex items-center" asChild>
        <Link href="/cars">
          View All
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {bodyTypes.map((type) => (
        <Link
          href={`/cars?bodyType=${type.name}`}
          key={type.name}
          className="group relative cursor-pointer"
        >
          {/* Image Wrapper */}
          <div className="relative h-28 w-full overflow-hidden rounded-lg">
            <Image
              src={type.image}
              alt={type.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
            />

            {/* Overlay with name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 rounded-lg">
              <h3 className="font-medium text-white">{type.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4 py-12'>
          <h2 className='text-2xl font-bold text-center mb-8'>Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" >
          {faqItems.map((faq, index) => {
            return (
            <AccordionItem value="item-1${index}" key={index} className="border-b">
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>

          </AccordionItem>
            )
          })}

          </Accordion>
        </div>
      </section>


  <section className="py-16 dotted-background text-white">
  <div className="container mx-auto px-4 text-center mb-8">
  <h2 className='text-3xl'>Ready to Find Your Dream Car?</h2>
  <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
    Join thousands of satisfied customers who found their perfect
    vehicle through our platform.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Button size="lg" variant="secondary" asChild>
      <Link href="/cars">View All Cars</Link>
    </Button>

    <SignedOut>
      <Button size="lg" asChild>
        <Link href="/sign-up">Sign Up Now</Link>
      </Button>
    </SignedOut>
  </div>
  </div>
</section>


    </div>
  )
}

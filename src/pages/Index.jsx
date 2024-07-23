import React from 'react';
import { Search, MapPin, Calendar, Users, Star, Coffee, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HotelFinderLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HotelFinder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Find Your Perfect Stay</h2>
            <p className="text-xl text-gray-600">Discover amazing hotels for your next adventure</p>
          </div>

          <Card className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center border rounded-md px-3 py-2">
                  <MapPin className="text-gray-400 mr-2" />
                  <Input type="text" placeholder="Where are you going?" className="border-0 focus:ring-0" />
                </div>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <Calendar className="text-gray-400 mr-2" />
                  <Input type="date" className="border-0 focus:ring-0" />
                </div>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <Users className="text-gray-400 mr-2" />
                  <Input type="number" placeholder="Guests" min="1" className="border-0 focus:ring-0" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Search className="mr-2" />
                  Search Hotels
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Popular Hotels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HotelCard
                name="Luxury Resort & Spa"
                location="Maldives"
                price={299}
                rating={4.8}
                image="/placeholder.svg"
              />
              <HotelCard
                name="City Center Hotel"
                location="New York"
                price={199}
                rating={4.5}
                image="/placeholder.svg"
              />
              <HotelCard
                name="Mountain View Lodge"
                location="Switzerland"
                price={249}
                rating={4.7}
                image="/placeholder.svg"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin className="w-12 h-12 text-blue-600" />}
              title="Wide Selection"
              description="Choose from thousands of hotels worldwide."
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-blue-600" />}
              title="Flexible Dates"
              description="Find the best prices for your travel dates."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Group Bookings"
              description="Easy booking for families and groups."
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 HotelFinder. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="text-center">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const HotelCard = ({ name, location, price, rating, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating}</span>
        </div>
        <div className="flex space-x-2">
          <Badge variant="secondary"><Coffee className="w-4 h-4 mr-1" /> Breakfast</Badge>
          <Badge variant="secondary"><Wifi className="w-4 h-4 mr-1" /> Free WiFi</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-2xl font-bold">${price}</span>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default HotelFinderLanding;
// src/seed.ts
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  GeoPoint 
} from 'firebase/firestore';
import { firebaseConfig } from './config/firebase';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Market Locations Data for Antananarivo
const marketLocations = [
  {
    name: "Analakely Market",
    address: "Rue Andrianary Ratianarivo, Antananarivo 101",
    coordinates: new GeoPoint(-18.9137, 47.5353),
    currentSales: [
      {
        productName: "Cement (50kg)",
        originalPrice: 25000,
        salePrice: 22000,
        discountPercentage: 12,
        expiryDate: new Date('2024-02-15')
      },
      {
        productName: "Steel Rebar (6m)",
        originalPrice: 15000,
        salePrice: 12500,
        discountPercentage: 16,
        expiryDate: new Date('2024-02-10')
      }
    ]
  },
  {
    name: "Andoabekoly Construction Supply",
    address: "Route d'Andoabekoly, Antananarivo 102",
    coordinates: new GeoPoint(-18.8683, 47.5220),
    currentSales: [
      {
        productName: "Concrete Blocks",
        originalPrice: 5000,
        salePrice: 4250,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-20')
      },
      {
        productName: "Roofing Sheets",
        originalPrice: 35000,
        salePrice: 29750,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-18')
      }
    ]
  },
  {
    name: "Ivato Construction Depot",
    address: "Zone Industrielle d'Ivato, Antananarivo 105",
    coordinates: new GeoPoint(-18.7983, 47.4786),
    currentSales: [
      {
        productName: "Insulation Panels",
        originalPrice: 50000,
        salePrice: 42500,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-25')
      },
      {
        productName: "PVC Pipes (6m)",
        originalPrice: 8000,
        salePrice: 6800,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-22')
      }
    ]
  },
  {
    name: "Ambohimanga Building Materials",
    address: "Route d'Ambohimanga, Antananarivo 103",
    coordinates: new GeoPoint(-18.9333, 47.5500),
    currentSales: [
      {
        productName: "Wood Planks (4m)",
        originalPrice: 20000,
        salePrice: 17000,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-28')
      },
      {
        productName: "Electrical Wiring Kit",
        originalPrice: 15000,
        salePrice: 12750,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-26')
      }
    ]
  },
  {
    name: "Antananarivo Central Construction Market",
    address: "Centre Ville, Antananarivo 101",
    coordinates: new GeoPoint(-18.9137, 47.5353),
    currentSales: [
      {
        productName: "Paint (20L)",
        originalPrice: 45000,
        salePrice: 38250,
        discountPercentage: 15,
        expiryDate: new Date('2024-03-01')
      },
      {
        productName: "Ceramic Tiles (m²)",
        originalPrice: 12000,
        salePrice: 10200,
        discountPercentage: 15,
        expiryDate: new Date('2024-02-27')
      }
    ]
  }
];

// Function to seed market locations
async function seedMarketLocations() {
  try {
    const marketsRef = collection(db, 'market_locations');
    
    for (const market of marketLocations) {
      await addDoc(marketsRef, market);
      console.log(`Added market: ${market.name}`);
    }
    
    console.log('Market locations seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding market locations:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedMarketLocations();
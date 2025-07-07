const universities = [
  {
    name: "Harvard University",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1400,
    minGPA: 3.7,
    budget: 60000,
    language: "English",
    scholarship: "yes",
    interests: ["Law", "Medicine", "Economics"]
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    minIELTS: 7.5,
    minSAT: 1500,
    minGPA: 3.8,
    budget: 65000,
    language: "English",
    scholarship: "yes",
    interests: ["AI", "Engineering", "Computer Science"]
  },
  {
    name: "Stanford University",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1450,
    minGPA: 3.8,
    budget: 64000,
    language: "English",
    scholarship: "yes",
    interests: ["AI", "Entrepreneurship", "Technology"]
  },
  {
    name: "University of Toronto",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 25000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "AI", "Psychology"]
  },
  {
    name: "McGill University",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.4,
    budget: 18000,
    language: "English",
    scholarship: "yes",
    interests: ["Economics", "Biology", "Law"]
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1280,
    minGPA: 3.3,
    budget: 22000,
    language: "English",
    scholarship: "yes",
    interests: ["Forestry", "Climate", "Business"]
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 1000,
    language: "German",
    scholarship: "no",
    interests: ["Engineering", "AI", "Robotics"]
  },
  {
    name: "LMU Munich",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1150,
    minGPA: 3.2,
    budget: 1000,
    language: "German",
    scholarship: "yes",
    interests: ["Philosophy", "Medicine", "Physics"]
  },
  {
    name: "University of Oxford",
    country: "UK",
    minIELTS: 7.0,
    minSAT: 1450,
    minGPA: 3.7,
    budget: 45000,
    language: "English",
    scholarship: "yes",
    interests: ["Law", "Philosophy", "AI"]
  },
  {
    name: "University of Cambridge",
    country: "UK",
    minIELTS: 7.0,
    minSAT: 1450,
    minGPA: 3.7,
    budget: 43000,
    language: "English",
    scholarship: "yes",
    interests: ["Engineering", "Biology", "History"]
  },
  {
    name: "Imperial College London",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 39000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "Physics", "Engineering"]
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    minIELTS: 6.5,
    minSAT: 1350,
    minGPA: 3.6,
    budget: 18000,
    language: "English",
    scholarship: "yes",
    interests: ["AI", "Computing", "Biotech"]
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    minIELTS: 6.0,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 4000,
    language: "English",
    scholarship: "yes",
    interests: ["Robotics", "Engineering", "Physics"]
  },
  {
    name: "Seoul National University",
    country: "South Korea",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.4,
    budget: 5000,
    language: "English",
    scholarship: "yes",
    interests: ["AI", "Economics", "International Relations"]
  },
  {
    name: "Australian National University",
    country: "Australia",
    minIELTS: 6.5,
    minSAT: 1280,
    minGPA: 3.3,
    budget: 20000,
    language: "English",
    scholarship: "yes",
    interests: ["Climate", "Politics", "Public Policy"]
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.4,
    budget: 22000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "Engineering", "Economics"]
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    minIELTS: 7.0,
    minSAT: 1350,
    minGPA: 3.6,
    budget: 2000,
    language: "English",
    scholarship: "no",
    interests: ["Engineering", "Physics", "Math"]
  },
  {
    name: "University of Amsterdam",
    country: "Netherlands",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 11000,
    language: "English",
    scholarship: "yes",
    interests: ["Psychology", "Sociology", "Business"]
  },
  {
    name: "Lund University",
    country: "Sweden",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 12000,
    language: "English",
    scholarship: "yes",
    interests: ["Environment", "Renewables", "Engineering"]
  },
  {
    name: "University of Helsinki",
    country: "Finland",
    minIELTS: 6.0,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 10000,
    language: "English",
    scholarship: "yes",
    interests: ["Education", "Law", "Climate"]
  },
  {
    name: "University of Edinburgh",
    country: "UK", 
    minIELTS: 6.5, 
    minSAT: 1280, 
    minGPA: 3.4, 
    budget: 32000, 
    language: "English", 
    scholarship: "yes",
    interests: ["History", "Law", "Engineering"]
  },
  {
    name: "King’s College London",
    country: "UK", 
    minIELTS: 6.5, 
    minSAT: 1270, 
    minGPA: 3.3, 
    budget: 35000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Medicine", "Pharmacy", "Public Health"]
  },
  {
    name: "University of Manchester",
    country: "UK", 
    minIELTS: 6.5, 
    minSAT: 1250, 
    minGPA: 3.2, 
    budget: 30000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Business", "Computer Science", "AI"]
  },
  {
    name: "University of Warwick",
    country: "UK", 
    minIELTS: 6.5, 
    minSAT: 1300, 
    minGPA: 3.4, 
    budget: 31000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Mathematics", "Economics", "Statistics"]
  },
  {
    name: "Nanyang Technological University",
    country: "Singapore", 
    minIELTS: 6.5, 
    minSAT: 1350, 
    minGPA: 3.6, 
    budget: 17000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Engineering", "AI", "Robotics"]
  },
  {
    name: "Kyoto University",
    country: "Japan", 
    minIELTS: 6.0, 
    minSAT: 1250, 
    minGPA: 3.3, 
    budget: 5000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Chemistry", "Biology", "Technology"]
  },
  {
    name: "KAIST",
    country: "South Korea", 
    minIELTS: 6.5, 
    minSAT: 1400, 
    minGPA: 3.7, 
    budget: 6000, 
    language: "English", 
    scholarship: "yes",
    interests: ["AI", "Engineering", "Quantum"]
  },
  {
    name: "University of Sydney",
    country: "Australia", 
    minIELTS: 6.5, 
    minSAT: 1250, 
    minGPA: 3.4, 
    budget: 25000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Veterinary Science", "Business", "Law"]
  },
  {
    name: "University of Queensland",
    country: "Australia", 
    minIELTS: 6.5, 
    minSAT: 1250, 
    minGPA: 3.3, 
    budget: 23000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Agriculture", "Psychology", "Public Health"]
  },
  {
    name: "Monash University",
    country: "Australia", 
    minIELTS: 6.5, 
    minSAT: 1220, 
    minGPA: 3.3, 
    budget: 21000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Pharmacy", "Education", "Engineering"]
  },
  {
    name: "University of Copenhagen",
    country: "Denmark", 
    minIELTS: 6.5, 
    minSAT: 1250, 
    minGPA: 3.4, 
    budget: 11000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Biotech", "Sociology", "Law"]
  },
  {
    name: "Tsinghua University",
    country: "China", 
    minIELTS: 6.5, 
    minSAT: 1350, 
    minGPA: 3.6, 
    budget: 5000, 
    language: "English", 
    scholarship: "yes",
    interests: ["Engineering", "AI", "Economics"]
  },
  {
    name: "Peking University",
    country: "China", 
    minIELTS: 6.5, 
    minSAT: 1300, 
    minGPA: 3.5, 
    budget: 4500, 
    language: "English", 
    scholarship: "yes",
    interests: ["Finance", "Law", "International Relations"]
  },
  {
    name: "University of California, Berkeley",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1400,
    minGPA: 3.7,
    budget: 45000,
    language: "English",
    scholarship: "yes",
    interests: ["Computer Science", "Economics", "Environmental Science"]
  },
  {
    name: "California Institute of Technology (Caltech)",
    country: "USA",
    minIELTS: 7.5,
    minSAT: 1550,
    minGPA: 3.9,
    budget: 58000,
    language: "English",
    scholarship: "yes",
    interests: ["Physics", "Engineering", "Astronomy"]
  },
  {
    name: "University of Chicago",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1500,
    minGPA: 3.8,
    budget: 62000,
    language: "English",
    scholarship: "yes",
    interests: ["Economics", "Law", "Mathematics"]
  },
  {
    name: "University of Waterloo",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 28000,
    language: "English",
    scholarship: "yes",
    interests: ["Computer Science", "Engineering", "Mathematics"]
  },
  {
    name: "University of Alberta",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 21000,
    language: "English",
    scholarship: "yes",
    interests: ["Petroleum Engineering", "Medicine", "Agriculture"]
  },
  {
    name: "Heidelberg University",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 1500,
    language: "German",
    scholarship: "no",
    interests: ["Medicine", "Philosophy", "Physics"]
  },
  {
    name: "University College London (UCL)",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1350,
    minGPA: 3.6,
    budget: 38000,
    language: "English",
    scholarship: "yes",
    interests: ["Architecture", "Medicine", "Economics"]
  },
  {
    name: "University of Hong Kong",
    country: "Hong Kong",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 18000,
    language: "English",
    scholarship: "yes",
    interests: ["Business", "International Relations", "Medicine"]
  },
  {
    name: "Waseda University",
    country: "Japan",
    minIELTS: 6.0,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 8000,
    language: "English",
    scholarship: "yes",
    interests: ["Political Science", "Business", "Engineering"]
  },
  {
    name: "Yonsei University",
    country: "South Korea",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.4,
    budget: 7000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "Business", "Korean Studies"]
  },
  {
    name: "University of New South Wales",
    country: "Australia",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 24000,
    language: "English",
    scholarship: "yes",
    interests: ["Renewable Energy", "Engineering", "Business"]
  },
  {
    name: "Uppsala University",
    country: "Sweden",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 13000,
    language: "English",
    scholarship: "yes",
    interests: ["Peace Studies", "Biology", "Physics"]
  },
  {
    name: "Delft University of Technology",
    country: "Netherlands",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 15000,
    language: "English",
    scholarship: "yes",
    interests: ["Aerospace Engineering", "Architecture", "Water Management"]
  },
  {
    name: "University of Zurich",
    country: "Switzerland",
    minIELTS: 7.0,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 2500,
    language: "English",
    scholarship: "no",
    interests: ["Banking", "Neuroscience", "Law"]
  },
  {
    name: "University of Vienna",
    country: "Austria",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 1500,
    language: "German",
    scholarship: "no",
    interests: ["Music", "Psychology", "History"]
  },
  {
    name: "University of Oslo",
    country: "Norway",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 1000,
    language: "English",
    scholarship: "yes",
    interests: ["Arctic Studies", "Peace Research", "Marine Biology"]
  },
  {
    name: "University of Cape Town",
    country: "South Africa",
    minIELTS: 6.5,
    minSAT: 1150,
    minGPA: 3.2,
    budget: 8000,
    language: "English",
    scholarship: "yes",
    interests: ["African Studies", "Medicine", "Astronomy"]
  },
  {
    name: "University of Buenos Aires",
    country: "Argentina",
    minIELTS: 6.0,
    minSAT: 1100,
    minGPA: 3.0,
    budget: 500,
    language: "Spanish",
    scholarship: "no",
    interests: ["Political Science", "Medicine", "Economics"]
  },
  {
    name: "University of São Paulo",
    country: "Brazil",
    minIELTS: 6.0,
    minSAT: 1100,
    minGPA: 3.0,
    budget: 1000,
    language: "Portuguese",
    scholarship: "no",
    interests: ["Agriculture", "Tropical Medicine", "Renewable Energy"]
  },
  {
    name: "Moscow State University",
    country: "Russia",
    minIELTS: 6.0,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 6000,
    language: "Russian",
    scholarship: "yes",
    interests: ["Mathematics", "Physics", "Space Research"]
  },  {
    name: "Princeton University",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1470,
    minGPA: 3.8,
    budget: 55000,
    language: "English",
    scholarship: "yes",
    interests: ["Physics", "Public Policy", "Mathematics"]
  },
  {
    name: "Columbia University",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1450,
    minGPA: 3.7,
    budget: 63000,
    language: "English",
    scholarship: "yes",
    interests: ["Journalism", "International Relations", "Business"]
  },
  {
    name: "University of Pennsylvania",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1420,
    minGPA: 3.7,
    budget: 60000,
    language: "English",
    scholarship: "yes",
    interests: ["Finance", "Medicine", "Computer Science"]
  },
  {
    name: "Cornell University",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1400,
    minGPA: 3.7,
    budget: 58000,
    language: "English",
    scholarship: "yes",
    interests: ["Hotel Management", "Agriculture", "Engineering"]
  },
  {
    name: "University of Michigan",
    country: "USA",
    minIELTS: 6.5,
    minSAT: 1350,
    minGPA: 3.6,
    budget: 48000,
    language: "English",
    scholarship: "yes",
    interests: ["Robotics", "Business", "Aerospace"]
  },
  {
    name: "University of California, Los Angeles (UCLA)",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1400,
    minGPA: 3.7,
    budget: 42000,
    language: "English",
    scholarship: "yes",
    interests: ["Film Studies", "Neuroscience", "AI"]
  },
  {
    name: "New York University (NYU)",
    country: "USA",
    minIELTS: 7.0,
    minSAT: 1370,
    minGPA: 3.6,
    budget: 56000,
    language: "English",
    scholarship: "yes",
    interests: ["Arts", "Finance", "Data Science"]
  },
  {
    name: "University of Washington",
    country: "USA",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.5,
    budget: 38000,
    language: "English",
    scholarship: "yes",
    interests: ["Computer Science", "Medicine", "Environmental Science"]
  },
  {
    name: "University of California, San Diego (UCSD)",
    country: "USA",
    minIELTS: 6.5,
    minSAT: 1320,
    minGPA: 3.6,
    budget: 40000,
    language: "English",
    scholarship: "yes",
    interests: ["Oceanography", "Biotech", "Engineering"]
  },
  {
    name: "University of Texas at Austin",
    country: "USA",
    minIELTS: 6.5,
    minSAT: 1280,
    minGPA: 3.5,
    budget: 35000,
    language: "English",
    scholarship: "yes",
    interests: ["Petroleum Engineering", "AI", "Business"]
  },
  {
    name: "University of Montreal",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 15000,
    language: "French",
    scholarship: "yes",
    interests: ["Linguistics", "Medicine", "AI"]
  },
  {
    name: "University of Calgary",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 18000,
    language: "English",
    scholarship: "yes",
    interests: ["Geology", "Energy", "Business"]
  },
  {
    name: "University of Ottawa",
    country: "Canada",
    minIELTS: 6.5,
    minSAT: 1180,
    minGPA: 3.2,
    budget: 16000,
    language: "English/French",
    scholarship: "yes",
    interests: ["Law", "Public Policy", "Medicine"]
  },
  {
    name: "Humboldt University of Berlin",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1150,
    minGPA: 3.2,
    budget: 500,
    language: "German",
    scholarship: "no",
    interests: ["Philosophy", "History", "Social Sciences"]
  },
  {
    name: "Free University of Berlin",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1150,
    minGPA: 3.2,
    budget: 500,
    language: "German",
    scholarship: "no",
    interests: ["Political Science", "Economics", "Biology"]
  },
  {
    name: "University of Freiburg",
    country: "Germany",
    minIELTS: 6.5,
    minSAT: 1150,
    minGPA: 3.2,
    budget: 800,
    language: "German",
    scholarship: "no",
    interests: ["Renewable Energy", "Medicine", "Philosophy"]
  },
  {
    name: "University of Bristol",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1280,
    minGPA: 3.4,
    budget: 28000,
    language: "English",
    scholarship: "yes",
    interests: ["Aerospace", "Law", "Economics"]
  },
  {
    name: "University of Glasgow",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 25000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "History", "Engineering"]
  },
  {
    name: "Durham University",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1300,
    minGPA: 3.4,
    budget: 27000,
    language: "English",
    scholarship: "yes",
    interests: ["Theology", "Physics", "Business"]
  },
  {
    name: "University of Birmingham",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 26000,
    language: "English",
    scholarship: "yes",
    interests: ["Dentistry", "Economics", "Computer Science"]
  },
  {
    name: "University of Leeds",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1220,
    minGPA: 3.2,
    budget: 24000,
    language: "English",
    scholarship: "yes",
    interests: ["Fashion", "Engineering", "Business"]
  },
  {
    name: "University of Sheffield",
    country: "UK",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 23000,
    language: "English",
    scholarship: "yes",
    interests: ["Architecture", "Journalism", "Medicine"]
  },
  {
    name: "University of St Andrews",
    country: "UK",
    minIELTS: 7.0,
    minSAT: 1350,
    minGPA: 3.6,
    budget: 29000,
    language: "English",
    scholarship: "yes",
    interests: ["International Relations", "Physics", "History"]
  },
  {
    name: "University of Auckland",
    country: "New Zealand",
    minIELTS: 6.5,
    minSAT: 1250,
    minGPA: 3.3,
    budget: 22000,
    language: "English",
    scholarship: "yes",
    interests: ["Marine Biology", "Medicine", "Business"]
  },
  {
    name: "University of Otago",
    country: "New Zealand",
    minIELTS: 6.0,
    minSAT: 1200,
    minGPA: 3.2,
    budget: 18000,
    language: "English",
    scholarship: "yes",
    interests: ["Dentistry", "Psychology", "Sports Science"]
  },
  {
    name: "University of Malaya",
    country: "Malaysia",
    minIELTS: 6.0,
    minSAT: 1150,
    minGPA: 3.0,
    budget: 5000,
    language: "English",
    scholarship: "yes",
    interests: ["Engineering", "Business", "Islamic Studies"]
  },
  {
    name: "University of Indonesia",
    country: "Indonesia",
    minIELTS: 6.0,
    minSAT: 1100,
    minGPA: 3.0,
    budget: 4000,
    language: "English/Indonesian",
    scholarship: "yes",
    interests: ["Public Health", "Engineering", "Economics"]
  },
  {
    name: "University of Delhi",
    country: "India",
    minIELTS: 6.0,
    minSAT: 1100,
    minGPA: 3.0,
    budget: 3000,
    language: "English",
    scholarship: "yes",
    interests: ["Economics", "Political Science", "Computer Science"]
  },
  {
    name: "Indian Institute of Technology (IIT Bombay)",
    country: "India",
    minIELTS: 6.5,
    minSAT: 1400,
    minGPA: 3.7,
    budget: 5000,
    language: "English",
    scholarship: "yes",
    interests: ["Engineering", "AI", "Physics"]
  },
  {
    name: "University of Cape Coast",
    country: "Ghana",
    minIELTS: 6.0,
    minSAT: 1000,
    minGPA: 3.0,
    budget: 2000,
    language: "English",
    scholarship: "yes",
    interests: ["Education", "Agriculture", "Public Health"]
  },
  {
    name: "American University of Beirut",
    country: "Lebanon",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 12000,
    language: "English",
    scholarship: "yes",
    interests: ["Medicine", "Business", "Middle Eastern Studies"]
  },
  {
    name: "University of Cape Town",
    country: "South Africa",
    minIELTS: 6.5,
    minSAT: 1200,
    minGPA: 3.3,
    budget: 8000,
    language: "English",
    scholarship: "yes",
    interests: ["African Studies", "Medicine", "Astronomy"]
  },
  {
    name: "University of Nairobi",
    country: "Kenya",
    minIELTS: 6.0,
    minSAT: 1000,
    minGPA: 3.0,
    budget: 3000,
    language: "English",
    scholarship: "yes",
    interests: ["Wildlife Conservation", "Medicine", "Agriculture"]
  },
  {
    name: "Cairo University",
    country: "Egypt",
    minIELTS: 6.0,
    minSAT: 1100,
    minGPA: 3.0,
    budget: 2000,
    language: "Arabic/English",
    scholarship: "yes",
    interests: ["Archaeology", "Medicine", "Engineering"]
  }
];

function findUniversities() {
  const userCountry = document.getElementById("country").value.trim();
  const userLanguage = document.getElementById("language").value.trim();
  const userBudget = parseInt(document.getElementById("budget").value);
  const userScholarship = document.getElementById("scholarship").value;
  const userYear = parseInt(document.getElementById("year").value);
  const userIELTS = parseFloat(document.getElementById("ielts").value);
  const userSAT = parseInt(document.getElementById("sat").value);
  const userGPA = parseFloat(document.getElementById("gpa").value);
  const userInterests = document.getElementById("interests").value.toLowerCase();

  let results = universities.filter(u =>
    u.country.toLowerCase() === userCountry.toLowerCase() &&
    u.language.toLowerCase() === userLanguage.toLowerCase() &&
    u.budget <= userBudget &&
    u.scholarship === userScholarship &&
    u.minIELTS <= userIELTS &&
    u.minSAT <= userSAT &&
    u.minGPA <= userGPA &&
    u.interests.some(i => userInterests.includes(i.toLowerCase()))
  );

  const resultDiv = document.getElementById("result");
  if (results.length > 0) {
    resultDiv.innerHTML = results.map(u =>
      `<strong>📍 ${u.name} (${u.country})</strong><br>
      - Min IELTS: ${u.minIELTS}, SAT: ${u.minSAT}, GPA: ${u.minGPA}<br>
      - Budget: $${u.budget}, Language: ${u.language}<br>
      - Scholarship: ${u.scholarship}, Focus: ${u.interests.join(", ")}<br><br>`
    ).join('');
  } else {
    resultDiv.innerHTML = "😕 No matching universities found.";
  }
}

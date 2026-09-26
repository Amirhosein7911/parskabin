export interface Project {
  id: string
  title: string
  style: string
  location: string
  makerId: string
  makerName: string
  image: string
  materials: string[]
  area: string
}

export interface Maker {
  id: string
  name: string
  specialty: string
  location: string
  yearsOfExperience: number
  avatar: string
  coverImage: string
  selectedProjects: string[]
  verified: boolean
  rating: number
  reviewCount: number
}

export interface Style {
  id: string
  name: string
  image: string
}

export const styles: Style[] = [
  { id: 'modern', name: 'مدیرن', image: '/styles/modern.jpg' },
  { id: 'minimal', name: 'مینیمال', image: '/styles/minimal.jpg' },
  { id: 'classic', name: 'کلاسیک', image: '/styles/classic.jpg' },
  { id: 'neoclassic', name: 'نئوکلاسیک', image: '/styles/neoclassic.jpg' },
  { id: 'luxury', name: 'لوکس', image: '/styles/luxury.jpg' },
  { id: 'wooden', name: 'چوبی', image: '/styles/wooden.jpg' },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'آشپزخانه مدرن مینیمال',
    style: 'مدیرن',
    location: 'تهران',
    makerId: '1',
    makerName: 'علی رضایی',
    image: '/projects/project-1.jpg',
    materials: ['چوب بلوط', 'شیشه مات'],
    area: '۲۵ متر مربع',
  },
  {
    id: '2',
    title: 'کابینت کلاسیک لوکس',
    style: 'لوکس',
    location: 'مشهد',
    makerId: '2',
    makerName: 'محمد کریمی',
    image: '/projects/project-2.jpg',
    materials: ['چوب گردو', 'برسیلیا'],
    area: '۳۲ متر مربع',
  },
  {
    id: '3',
    title: 'آشپزخانه نئوکلاسیک',
    style: 'نئوکلاسیک',
    location: 'اصفهان',
    makerId: '3',
    makerName: 'حسین احمدی',
    image: '/projects/project-3.jpg',
    materials: ['چوب راش', 'طلاکاری'],
    area: '۲۸ متر مربع',
  },
  {
    id: '4',
    title: 'کابینت چوبی طبیعی',
    style: 'چوبی',
    location: 'شیراز',
    makerId: '4',
    makerName: 'رضا موسوی',
    image: '/projects/project-4.jpg',
    materials: ['چوب بلوط صنعتی', 'سنگ ماربلیت'],
    area: '۳۰ متر مربع',
  },
  {
    id: '5',
    title: 'آشپزخانه مینیمال',
    style: 'مینیمال',
    location: 'کرج',
    makerId: '1',
    makerName: 'علی رضایی',
    image: '/projects/project-5.jpg',
    materials: ['کامپوزیت', 'شیشه سکوریت'],
    area: '۲۲ متر مربع',
  },
  {
    id: '6',
    title: 'کابینت مدرن',
    style: 'مدیرن',
    location: 'تبریز',
    makerId: '2',
    makerName: 'محمد کریمی',
    image: '/projects/project-6.jpg',
    materials: ['MDF', 'لاک مات'],
    area: '۲۷ متر مربع',
  },
]

export const makers: Maker[] = [
  {
    id: '1',
    name: 'علی رضایی',
    specialty: 'طراحی کابینت مدرن و مینیمال',
    location: 'تهران',
    yearsOfExperience: 12,
    avatar: '/makers/maker-1.jpg',
    coverImage: '/makers/cover-1.jpg',
    selectedProjects: ['1', '5'],
    verified: true,
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: '2',
    name: 'محمد کریمی',
    specialty: 'کابینت لوکس و کلاسیک',
    location: 'مشهد',
    yearsOfExperience: 15,
    avatar: '/makers/maker-2.jpg',
    coverImage: '/makers/cover-2.jpg',
    selectedProjects: ['2', '6'],
    verified: true,
    rating: 4.8,
    reviewCount: 96,
  },
  {
    id: '3',
    name: 'حسین احمدی',
    specialty: 'طراحی نئوکلاسیک',
    location: 'اصفهان',
    yearsOfExperience: 10,
    avatar: '/makers/maker-3.jpg',
    coverImage: '/makers/cover-3.jpg',
    selectedProjects: ['3'],
    verified: true,
    rating: 4.7,
    reviewCount: 74,
  },
  {
    id: '4',
    name: 'رضا موسوی',
    specialty: 'کابینت چوبی طبیعی',
    location: 'شیراز',
    yearsOfExperience: 8,
    avatar: '/makers/maker-4.jpg',
    coverImage: '/makers/cover-4.jpg',
    selectedProjects: ['4'],
    verified: false,
    rating: 4.6,
    reviewCount: 52,
  },
]
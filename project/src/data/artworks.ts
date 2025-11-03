export interface Artwork {
  title: string;
  medium: string;
  year: string;
  image: string;
  description?: string;
}

export const artworks: Artwork[] = [
  {
    title: 'Urbane Fragmente',
    medium: 'Acryl und Mixed Media auf Leinwand',
    year: '2024',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eine Auseinandersetzung mit der modernen Stadtlandschaft und ihrer fragmentierten Wahrnehmung.'
  },
  {
    title: 'Stille Gewässer',
    medium: 'Öl auf Leinwand',
    year: '2024',
    image: 'https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Die Ruhe der Natur eingefangen in sanften Farbverläufen und subtilen Strukturen.'
  },
  {
    title: 'Zwischenräume',
    medium: 'Mixed Media auf Holz',
    year: '2023',
    image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ein Dialog zwischen Licht und Schatten, Raum und Zeit.'
  },
  {
    title: 'Metamorphose',
    medium: 'Acryl auf Leinwand',
    year: '2023',
    image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Der ständige Wandel und die Transformation als zentrales Thema dieser Serie.'
  },
  {
    title: 'Organische Strukturen',
    medium: 'Mixed Media',
    year: '2023',
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Inspiriert von natürlichen Formen und Strukturen in der Mikrobiologie.'
  },
  {
    title: 'Abstrakte Landschaft I',
    medium: 'Öl auf Leinwand',
    year: '2022',
    image: 'https://images.pexels.com/photos/1070536/pexels-photo-1070536.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eine freie Interpretation von Landschaftselementen in reduzierter Form.'
  },
  {
    title: 'Farbspiele',
    medium: 'Acryl auf Papier',
    year: '2022',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experimentelle Arbeiten mit Farbüberlagerungen und Transparenz.'
  },
  {
    title: 'Vertikale Horizonte',
    medium: 'Mixed Media',
    year: '2022',
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Eine neue Perspektive auf traditionelle Horizontlinien.'
  },
  {
    title: 'Texturierte Momente',
    medium: 'Acryl und Collage',
    year: '2021',
    image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Haptische Experimente mit verschiedenen Materialien und Oberflächen.'
  }
];

export type Movie = {
  slug: string; title: string; year: number; runtime: string; genres: string[];
  rating: number; director: string; cast: string[]; poster: string; backdrop: string;
  synopsis: string; verdict: string;
};

const imgs = {
  city: "photo-1519608487953-e999c86e7455",
  desert: "photo-1500530855697-b586d89ba3ee",
  woman: "photo-1488426862026-3ee34a7d66df",
  coast: "photo-1507525428034-b723cf961d3e",
  space: "photo-1446776811953-b23d57bd21aa",
  road: "photo-1519501025264-65ba15a82390",
  forest: "photo-1511497584788-876760111969",
  neon: "photo-1519608487953-e999c86e7455",
  snow: "photo-1483347756197-71ef80e95f73",
  stage: "photo-1503095396549-807759245b35"
};
const image = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

const base = [
  ["the-last-signal","The Last Signal",2026,"2h 18m",["Sci-Fi","Drama"],9.2,"Mara Voss",imgs.space,"A linguist on a silent orbital station receives a message that appears to be from Earth, forty years in the future."],
  ["velvet-night","Velvet Night",2025,"1h 54m",["Thriller","Mystery"],8.7,"Elias North",imgs.city,"A nightclub pianist becomes the only witness to a disappearance nobody else remembers."],
  ["after-the-tide","After the Tide",2026,"2h 03m",["Drama","Romance"],8.9,"Nina Calder",imgs.coast,"Two former lovers return to an island community rebuilding after an impossible storm."],
  ["red-horizon","Red Horizon",2025,"2h 25m",["Adventure","Sci-Fi"],8.5,"Theo March",imgs.desert,"A rescue pilot crosses a forbidden desert where the horizon moves every night."],
  ["the-orchard","The Orchard",2024,"1h 47m",["Horror","Drama"],8.3,"Sofia Vale",imgs.forest,"Three sisters inherit an orchard whose trees bloom only after dark."],
  ["static-hearts","Static Hearts",2026,"1h 42m",["Romance","Comedy"],8.1,"Jamie Roux",imgs.road,"A radio producer and a charming caller fall in love without ever learning each other's names."],
  ["north-of-silence","North of Silence",2025,"2h 11m",["Thriller","Drama"],8.8,"Anton Reyes",imgs.snow,"A journalist follows a missing-person trail into a town that has removed itself from every map."],
  ["the-second-take","The Second Take",2024,"1h 58m",["Comedy","Drama"],7.9,"Lena Hart",imgs.stage,"A forgotten actor gets one final audition for the role based on his own life."],
  ["glass-cities","Glass Cities",2026,"2h 07m",["Sci-Fi","Thriller"],9.0,"Kiran Sol",imgs.city,"In a city where memories are public records, an archivist discovers a day that belongs to no one."],
  ["paper-moons","Paper Moons",2025,"1h 49m",["Drama","Adventure"],8.4,"Ava Mire",imgs.road,"A teenage cartographer and her grandfather redraw a country one last time."],
  ["low-season","Low Season",2025,"1h 36m",["Comedy","Mystery"],7.8,"Marc Bell",imgs.coast,"The only guests at a seaside hotel become suspects when the owner vanishes."],
  ["echo-house","Echo House",2026,"1h 51m",["Horror","Mystery"],8.6,"Ren Ito",imgs.stage,"A sound designer renovates a house that plays conversations before they happen."],
  ["bright-objects","Bright Objects",2024,"2h 01m",["Drama","Sci-Fi"],8.0,"Cleo Wynn",imgs.space,"A grieving astronomer catalogs strange objects appearing in family photographs."],
  ["wild-mercy","Wild Mercy",2025,"2h 14m",["Action","Drama"],8.2,"Jonas Pike",imgs.forest,"A park ranger escorts a fugitive through a wildfire while questioning who deserves rescue."],
  ["borrowed-light","Borrowed Light",2026,"1h 45m",["Romance","Drama"],8.7,"Amara Chen",imgs.woman,"A portrait photographer begins seeing the hidden lives of everyone she captures."],
  ["blackwater-mile","Blackwater Mile",2024,"1h 57m",["Action","Thriller"],7.7,"Dean Crow",imgs.road,"A courier has one night to deliver a case across a city under lockdown."],
  ["the-sundial","The Sundial",2025,"2h 09m",["Mystery","Adventure"],8.5,"Inez Ford",imgs.desert,"An archaeologist finds a sundial that points toward moments instead of directions."],
  ["ordinary-stars","Ordinary Stars",2026,"1h 40m",["Comedy","Drama"],8.3,"Milo Grant",imgs.space,"Five neighbors mistake a satellite crash for first contact and finally meet one another."],
  ["all-the-blue","All the Blue",2024,"1h 52m",["Drama","Romance"],8.1,"Noor Davis",imgs.coast,"A competitive swimmer returns home to teach her estranged father how to float."],
  ["city-of-small-hours","City of Small Hours",2025,"2h 05m",["Thriller","Mystery"],8.9,"Rafa Stone",imgs.city,"A night-shift taxi driver realizes every passenger is headed to the same address."]
] as const;

export const movies: Movie[] = base.map(([slug,title,year,runtime,genres,rating,director,img,synopsis], i) => ({
  slug, title, year, runtime, genres: [...genres], rating, director,
  cast: ["Lea Moreno", "David Kaye", "Imani Brooks", "Tomas Vale"].slice(0, 3 + (i % 2)),
  poster: image(img, 700), backdrop: image(img, 1800), synopsis,
  verdict: ["A precise, atmospheric triumph.","Bold filmmaking with a human pulse.","A slow burn that rewards your attention."][i % 3]
}));

export const reviews = movies.slice(0, 10).map((movie, i) => ({
  movie, author: ["Maya Ellis","Jon Bell","Ari Cohen","Nora Singh"][i % 4],
  date: `June ${10 - i}, 2026`,
  excerpt: `${movie.verdict} ${movie.title} turns its ambitious premise into a richly observed story about the choices that define us.`,
  body: `${movie.title} understands that spectacle only matters when it reveals character. Director ${movie.director} builds the film with unusual patience, allowing silence, framing, and small gestures to carry as much weight as its largest moments. The result feels both immediately accessible and worthy of a second viewing.`,
  pros: ["Confident visual language","Excellent ensemble performances","A memorable final act"],
  cons: ["The middle act occasionally drifts","Some ideas deserve more room"]
}));

export const articles = [
  {slug:"best-sci-fi-movies-2026",title:"Best Sci-Fi Movies of 2026",category:"The List",excerpt:"Ten films expanding the boundaries of what science fiction can feel like.",image:image(imgs.space,1400),read:"8 min"},
  {slug:"psychological-thrillers",title:"Top 10 Psychological Thrillers",category:"Essential Viewing",excerpt:"Twisted narratives, unreliable minds, and endings that refuse to leave.",image:image(imgs.city,1400),read:"11 min"},
  {slug:"nolan-ranking",title:"Christopher Nolan Film Ranking",category:"Directors",excerpt:"A considered ranking of cinema's most devoted architect of time.",image:image(imgs.stage,1400),read:"14 min"},
  {slug:"hidden-gems-tonight",title:"Hidden Gems You Should Watch Tonight",category:"Roseflix Selects",excerpt:"Quiet masterpieces and cult curiosities hiding in plain sight.",image:image(imgs.road,1400),read:"6 min"},
  {slug:"most-anticipated",title:"Most Anticipated Movies of the Year",category:"Preview",excerpt:"The releases already shaping the year in cinema.",image:image(imgs.desert,1400),read:"9 min"}
];

export const categories = ["Action","Drama","Horror","Thriller","Comedy","Sci-Fi","Romance","Adventure"];

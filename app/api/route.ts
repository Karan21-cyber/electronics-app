export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products",{next:{revalidate:3600,},cache:"default"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getAllCategory(){
    const res = await fetch('https://fakestoreapi.com/products/categories',{next:{revalidate:3600},cache:"default"});
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}
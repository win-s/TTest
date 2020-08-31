export const all = (items)=>{
  return items
}

export const active = (items) =>{
  return items.filter( item => item.finished );
}

export const completed = (items)=>{
  return items.filter( item => !item.finished );
}

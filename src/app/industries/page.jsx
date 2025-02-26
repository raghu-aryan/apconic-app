import { List } from "@mui/material"
import IndustryCard from "@/components/view/industries/IndustryCard";

async function getOurIndustries() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: 'no-store' })
  return response.json()
}

export default async function Dashboard() {
  const ourIndustries = await getOurIndustries();
  return (
    <List>
      {ourIndustries.map(industry => (
        <IndustryCard data={industry} />
      ))}
    </List>
  )
}
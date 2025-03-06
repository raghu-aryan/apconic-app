"use server";
import { redirect } from 'next/navigation'
 
export async function createContactRequest(formData) {
  console.log(formData);
  redirect('/');
}
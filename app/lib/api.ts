import { type Assignment } from "@/interfaces";
import axios from 'axios';

// const api_url = import.meta.env.VITE_API_URL || "https://localhost:8000";
const api_url = import.meta.env.VITE_API_URL || "https://cs111-backend-api-hc2vq.ondigitalocean.app";
export async function getAssignmentTypes() {
  const { data: { data }} = await axios.get(`${api_url}/assignments/types`);
  return data;
}

export async function getAssignmentNamesByType(type: string){
  const { data: { data } } = await axios.get(`${api_url}/assignment/${type}`);
  return data;
}

export async function getAssignmentByName(type: string, name: string) {
  const { data: { data } } = await axios.get(`${api_url}/assignment/${type}/${name}`);
  return data;
}

export async function getAllAssignmentsByType(type: string): Promise<Assignment[]> {
  const { data: { data }} = await axios.get(`${api_url}/assignments/${type}`);
  return data as Assignment[];
}


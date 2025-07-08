'use server'

import { RepositorioCarteira } from "./repositorioCarteira";

export default async function listarCarteiras() {
  return await RepositorioCarteira.listarTodas();
}

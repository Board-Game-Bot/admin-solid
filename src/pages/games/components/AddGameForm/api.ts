import axios from 'axios';
import { keysIn } from 'lodash-es';

export const ListNpmPackageApi = async (value: string) => {
  const res = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${value}&size=10`);
  const data = res.data as any;
  return data.objects.map((object: any) => object.package.name);
};

export const ListVersionsApi = async (pkg: string) => {
  const res = await axios.get(`https://registry.npmjs.org/${pkg}`);
  const data: any = res.data ?? { versions: {} };
  return keysIn(data.versions ?? {}).sort().reverse();
};
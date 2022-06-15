import Api from './api';

interface ItemProps {
  name: string;
  wholePrice: number | null;
  halfPrice: number | null;
  description: string;
}

export async function getListCommand() {
  const res = await Api.get('menuItems');
  return res.data;
}
export async function AddItem(params: ItemProps) {
  const res = await Api.post('menuItem', params);
  return res.data;
}

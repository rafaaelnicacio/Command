import Api from './api';

export async function getListCommand() {
  const res = await Api.get('menuItems');
  return res.data;
}

import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (id: number) => {
  return jsonwebtoken.sign(id.toString(), process.env.JWT_SECRET as string);
};

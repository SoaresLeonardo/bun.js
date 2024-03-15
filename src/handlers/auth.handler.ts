import { compare } from "bcryptjs";
import type { AuthDTO } from "../dtos/auth";
import usersRepository from "../repositories/users-repository";
import jwt from "jsonwebtoken";

export async function auth({ email, password }: AuthDTO) {
  const userExist = await usersRepository.findByEmail(email);

  if (!userExist) {
    return {
      message: "Invalid credentials",
    };
  }

  const isPasswordValid = await compare(password, userExist.password);

  if (!isPasswordValid) {
    return {
      message: "Invalid credentials",
    };
  }

  const jwtToken = jwt.sign(
    { sub: String(userExist.id), role: userExist.role },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: "1h",
    }
  );

  return {
    access_token: jwtToken,
  };
}

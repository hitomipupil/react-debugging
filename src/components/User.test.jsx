import { render, screen } from "@testing-library/react";
import { expect, describe, vi, it} from 'vitest';

import User from "./User";
import getUser from "../apis/getUser";

vi.mock('../apis/getUser');

describe('User component', () => {
it('render user data', async() => {
const mockUser = { name: 'Jack', email: 'jack@gmail.com'}

getUser.mockResolvedValue(mockUser);

render(<User />)
expect(await screen.findByText('Jack')).toBeInTheDocument();
expect(await screen.findByText('jack@gmail.com')).toBeInTheDocument();
})

it('render error message', async() => {
const errorMessage = 'Failed to fetch user'

getUser.mockRejectedValue(new Error(errorMessage))

render(<User />)
expect(await screen.findByText(errorMessage)).toBeInTheDocument();
})
})
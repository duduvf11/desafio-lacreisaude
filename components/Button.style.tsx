import styled from "styled-components";

export const Button = styled.button`
    padding: 0.625rem 2rem 0.625rem 2rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: var(--color-emerald-20);
        transition: background-color 0.4s ease;
    }
    &:focus {
        outline: 2px solid var(--color-blue-50);
    }
`;
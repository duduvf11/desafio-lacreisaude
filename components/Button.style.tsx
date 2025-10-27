import styled from "styled-components";

export const Button = styled.button`
    padding: 0.75rem 2rem 0.75rem 2rem;
    margin: 0.15rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    min-height: 24px;
    &:hover {
        background-color: var(--color-emerald-20);
        transition: background-color 0.4s ease;
    }
    &:focus {
        outline: 2px solid var(--color-blue-50);
    }
`;
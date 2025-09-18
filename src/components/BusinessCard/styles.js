import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 100%;
  max-width: 460px;
  padding: 2rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    list-style: none;
  }

  .hours-list {
    overflow: auto;
    padding-bottom: 0.4rem;
    display: flex;
    gap: 0.4rem;
    margin-top: 2.4rem;
    align-items: flex-start;
    li {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: #ffffff;
      padding: 0.4rem;
      font-size: 1.4rem;
      border-radius: ${({ theme }) => theme.radius.medium};
      &.open {
        background: ${({ theme }) => theme.colors.secondary};
      }
      &.close {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .services-list {
    overflow: auto;
    display: flex;
    flex-shrink: 12;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 2.4rem;
    padding-bottom: 0.4rem;

    li {
      white-space: nowrap;
      text-transform: lowercase;
      font-size: 1.4rem;
      padding: 0.4rem;
      background: ${({ theme }) => theme.colors.background};
      border-radius: ${({ theme }) => theme.radius.small};
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
  }
`;

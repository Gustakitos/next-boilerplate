import React from 'react'
import * as S from './styles'

export default function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}: {
  title?: string
  description?: string
}) {
  return (
    <S.Wrapper>
      <h1>React Avançado</h1>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}

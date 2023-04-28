import { useState, useEffect, memo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type RouteProps = {
	link: string
	title: string
}

export default memo(function PostRouter(props: RouteProps) {

	return <>
		<a href={'/' + `${props.link}`}>{props.title}</a>
	</>
})
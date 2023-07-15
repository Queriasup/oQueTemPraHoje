import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
import styles from './BotoesHeader.module.scss'

export default function CreateBotoesHeader(){
  return(
    <Breadcrumb className={styles.botoes} separator=''>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Inicio</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Sobre</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Login</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}


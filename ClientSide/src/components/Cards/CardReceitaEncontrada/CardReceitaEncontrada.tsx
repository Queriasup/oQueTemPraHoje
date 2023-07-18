import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Tag } from '@chakra-ui/react'
import styles from './CardReceitaEncontrada.module.scss';

export default function CriarCardReceitaEncontrada({objeto}:any){
    
    return(
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://fyoti.com.br/wp-content/uploads/2022/08/Receita-de-Bolo-de-chocolate-decorado.jpg'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>{objeto.nome}</Heading>

                    <Text py='2'>
                       {objeto.resumo}
                    </Text>
                </CardBody>

                    <CardFooter className={styles.cardFooter}>
                        <Button variant='solid' colorScheme='blue'>
                            Visualizar Receita
                        </Button>
                        <div className={styles.tags}>
                            <Tag>Simples</Tag>
                            <Tag>Rápido</Tag>
                            <Tag>3 porções</Tag>
                        </div>
                    </CardFooter>
            </Stack>
        </Card>
    )
}
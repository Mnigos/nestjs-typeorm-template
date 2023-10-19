import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as pactum from 'pactum'

import { AppModule } from '@modules/app'

describe('AppController (e2e)', () => {
  let app: INestApplication
  let url: string

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()

    await app.listen(0)

    url = await app.getUrl()

    pactum.request.setBaseUrl(url.replace('[::1]', 'localhost'))
  })

  afterAll(async () => {
    await app.close()
  })

  test('/ (GET)', () =>
    pactum.spec().get('/').expectStatus(200).expectBody('Hello World!'))
})

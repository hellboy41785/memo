namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      EMAIL_SERVER: string
      EMAIL_FROM: string
      AUTH0_ID: string
      AUTH0_SECRET: string
      AUTH0_DOMAIN: string
      GITHUB_ID: string
      GITHUB_SECRET: string
      GOOGLE_ID: string
      GOOGLE_SECRET: string
      DATABASE_URL: string
      SECRET: string
      NEXT_AUTH:string
    }
  }
import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  DB_Port: process.env.POSTGRES_Port,
  host: process.env.POSTGRES_HOST,
  port:process.env.port,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

POSTGRES_PASSWORD=$POSTGRES_PASSWORD-
POSTGRES_DB=$POSTGRES_DB -
POSTGRES_Port=$POSTGRES_Port -
POSTGRES_HOST=$POSTGRES_HOST -
port=$port

AWS_REGION=$AWS_DEFAULT_REGION -

AWS_PROFILE=$AWS_PROFILE-
AWS_BUCKET=$AWS_BUCKET -
URL=$URL-
JWT_SECRET=$JWT_SECRET


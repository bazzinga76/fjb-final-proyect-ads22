import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        email: "filiberto.juarez@gmail.com",
        name: "Filiberto",
        posts: {
            create: [
                {
                    title: "Sin Titulo",
                    content: "",
                    published: true
                }
            ]
        }
    }
]

/* const postData: Prisma.PostCreateInput[] = [
    {

    }
] */

async function main(){
    console.log('seeding...');
/*     for(const u of userData){
        const user = await prisma.user.create({
            data: u
        });
    } */
    await prisma.user.createMany({ data: userData });
    // await prisma.post.createMany({ data: postData });
    // await prisma.comment.createMany({ data: commentData });
    // await prisma.reaction.createMany({ data: reactionData });
};

main()
    .catch((e) => {
        console.error(e)
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    });
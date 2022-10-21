import { Field, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Waste } from "./Waste";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    userId!: number;

    @Field()
    @Column({ unique: true })
    userName!: string;

    @Field()
    @Column({ unique: true })
    userEmail!: string;

    @Column()
    userPassword!: string;

    @Field(() => Int)
    @Column()
    userAge: number;

    @Field()
    @Column()
    userAddress: string;

    @Field()
    @Column({ unique: true })
    userMobile: string;

    @Field()
    @Column()
    userCity: string;

    @Field({ nullable: true })
    @Column()
    userState: string;

    @OneToMany(() => Waste, (waste) => waste.wasteId)
    userWaste: Waste[];

    @Field(() => String)
    @CreateDateColumn()
    userCreatedAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    userUpdatedAt: Date;
}
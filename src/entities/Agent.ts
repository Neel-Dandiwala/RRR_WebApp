import { Field, Int, ObjectType } from "type-graphql";
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Waste } from "./Waste";
// import { MaxLength, Length } from "class-validator";

@ObjectType()
@Entity()
export class Agent extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    agentId!: number;

    @Field()
    @Column({ unique: true })
    agentName!: string;

    @Field()
    @Column({ unique: true })
    agentEmail!: string;

    @Field()
    @Column()
    agentPassword!: string;

    @Field()
    @Column()
    agentAge: number;

    @Field()
    @Column({ unique: true })
    agentMobile!: string;

    @Field()
    @Column()
    agentCity: string;

    @Field({ nullable: true })
    @Column()
    agentState: string;

    @Field()
    @OneToMany(() => Waste, (waste) => waste.wasteId)
    agentWaste: Waste[];

    @Field(() => String)
    @CreateDateColumn()
    agentCreatedAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    agentUpdatedAt: Date;
}
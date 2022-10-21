import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Agent } from "./Agent";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Waste {

    @Field()
    @PrimaryGeneratedColumn()
    wasteId!: number;

    @Field()
    @Column()
    wasteTitle!: string;

    @Field()
    @Column()
    wasteCity: string;

    @Field()
    @Column()
    wasteState: string;

    @ManyToOne(() => User, (user) => user.userId)
    wasteUser: User;

    @ManyToOne(() => Agent, (agent) => agent.agentId)
    wasteAgent: Agent;

    @Field()
    @CreateDateColumn()
    wasteSubmittedAt: Date;

}
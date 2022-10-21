import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Agent } from "./Agent";


@Entity()
export class Waste {

    @PrimaryGeneratedColumn()
    wasteId!: number;

    @Column()
    wasteTitle!: string;

    @Column()
    wasteCity: string;

    @Column()
    wasteState: string;

    @ManyToOne(() => User, (user) => user.userId)
    wasteUser: User;

    @ManyToOne(() => Agent, (agent) => agent.agentId)
    wasteAgent: Agent;

    @CreateDateColumn()
    wasteSubmittedAt: Date;

}
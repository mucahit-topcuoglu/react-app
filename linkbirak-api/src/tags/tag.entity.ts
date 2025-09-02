import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ unique: true, length: 50 })
  name: string;

  @ManyToMany('Link', 'tags')
  links: any[];
} 
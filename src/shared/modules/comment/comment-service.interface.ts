import { DocumentType } from '@typegoose/typegoose';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';

export interface CommentService {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByCommentId(offerId: string): Promise<DocumentType<CommentEntity>[]>;
  deleteByCommentId(offerId: string): Promise<number | null>;
}

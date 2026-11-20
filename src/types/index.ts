export type FeedbackStatus='Under review'|'Planned'|'In progress'|'Complete'|'Declined';
export type FeedbackCategory='Feature'|'Improvement'|'Bug';
export type FeedbackItem={id:number;title:string;description:string;category:FeedbackCategory;status:FeedbackStatus;votes:number;author:string;initials:string;date:string;comments:number;voted?:boolean};

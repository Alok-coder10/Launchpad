'use client';
import React,{createContext,useContext,useMemo,useState} from 'react';
import {initialFeedback} from '@/lib/data';
import {FeedbackItem} from '@/types';
type ContextValue={feedback:FeedbackItem[];toggleVote:(id:number)=>void;addFeedback:(item:Omit<FeedbackItem,'id'|'votes'|'comments'|'date'>)=>void;updateStatus:(id:number,status:FeedbackItem['status'])=>void};
const Context=createContext<ContextValue|null>(null);
export function AppProvider({children}:{children:React.ReactNode}){const [feedback,setFeedback]=useState(initialFeedback);const value=useMemo(()=>({feedback,toggleVote:(id:number)=>setFeedback(old=>old.map(f=>f.id===id?{...f,votes:f.votes+(f.voted?-1:1),voted:!f.voted}:f)),addFeedback:(item:Omit<FeedbackItem,'id'|'votes'|'comments'|'date'>)=>setFeedback(old=>[{...item,id:Math.max(0,...old.map(x=>x.id))+1,votes:0,comments:0,date:'Just now'},...old]),updateStatus:(id:number,status:FeedbackItem['status'])=>setFeedback(old=>old.map(f=>f.id===id?{...f,status}:f))}),[feedback]);return <Context.Provider value={value}>{children}</Context.Provider>}
export function useApp(){const value=useContext(Context);if(!value)throw new Error('useApp must be used within AppProvider');return value;}

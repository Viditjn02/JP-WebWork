import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Briefcase } from 'lucide-react';
import { JobOpening } from '../types';

const JOB_OPENINGS: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Offset Machine Operator',
    department: 'Production',
    location: 'Ludhiana, Punjab',
    type: 'Full-time',
    description: 'Looking for an experienced operator for Heidelberg 6-color press with minimum 5 years experience.'
  },
  {
    id: '2',
    title: 'Structural Packaging Designer',
    department: 'Design',
    location: 'Ludhiana, Punjab',
    type: 'Full-time',
    description: 'Expertise in CAD software (ArtiosCAD) for creating box structures and prototypes.'
  },
  {
    id: '3',
    title: 'Quality Assurance Executive',
    department: 'Quality Control',
    location: 'Ludhiana, Punjab',
    type: 'Full-time',
    description: 'Responsible for incoming material inspection and final product quality checks.'
  }
];

export const Careers: React.FC = () => {
  return (
    <div className="pt-0">
      <div className="bg-brand-dark text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Careers</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our team and help shape the future of packaging.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeader 
          title="Current Openings" 
          subtitle="We are always looking for talented individuals to join our growing family."
        />
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {JOB_OPENINGS.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                  <span className="bg-brand-light px-2 py-0.5 rounded text-brand-blue font-medium">{job.type}</span>
                  <span>{job.location}</span>
                </div>
                <p className="text-slate-600 text-sm max-w-xl">{job.description}</p>
              </div>
              <button className="px-6 py-2 bg-white border-2 border-brand-blue text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-colors shrink-0">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section light className="text-center">
        <h2 className="text-2xl font-bold font-heading mb-4">Don't see a fit?</h2>
        <p className="text-slate-600 mb-8">
          We are always open to meeting talented people. Send your resume to <span className="font-bold text-brand-blue">hr@jainpackwell.com</span>
        </p>
      </Section>
    </div>
  );
};
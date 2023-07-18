import { Request, Response } from 'express';
import { Office, OfficeImpl } from '../models/office';

let offices: Office[] = [];

export const createOffice = (req: Request, res: Response) => {
  const data = req.body;
  const newOffice = new OfficeImpl(data);
  offices.push(newOffice);
  res.status(201).json(newOffice);
};

export const getOffices = (_req: Request, res: Response) => {
  res.json({ branchOffices: offices});
};

export const getOfficeById = (req: Request, res: Response) => {
  const { id } = req.params;
  const officeFound = offices.find((office) => office.code === id);
  if (officeFound) {
    res.json(officeFound);
  } else {
    res.sendStatus(404);
  }
};

export const updateOffice = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const index = offices.findIndex((office) => office.code === id);
  if (index !== -1) {
    const updatedBranchOffice = new OfficeImpl({ ...data, code: id });
    offices[index] = updatedBranchOffice;
    res.json(updatedBranchOffice);
  } else {
    res.sendStatus(404);
  }
};

export const deleteOffice = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = offices.findIndex((office) => office.code === id);
  if (index !== -1) {
    const deletedBranchOffice = offices[index];
    offices.splice(index, 1);
    res.json(deletedBranchOffice);
  } else {
    res.sendStatus(404);
  }
};
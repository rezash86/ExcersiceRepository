/**
 * WARNING This document contains technical data the export of which is or
 * may be restricted by Canada's Export and Import Permits Act R.S.C., 1985, c. E-19.
 * Diversion contrary to Canadian law is prohibited. The export, re-export,
 * transfer or re-transfer of this technical data to any other company, entity,
 * person, or destination, or for any use or purpose other than that for which
 * the technical data was originally provided, is prohibited without prior
 * written approval from CS-Canada and authorization under applicable export
 * control laws. Exported under the authority of license exception provided by
 * the Export Control List (ECL).
 * 
 * ECL Classification [P-ECCN US classification]: NLR [N/A]
 * 
 * Copyright 2017 CS Communication and Systems Canada Inc. All Rights Reserved.
 * 
 * The Information contained herein is confidential property of CS Communication
 * and Systems Canada Inc.
 * 
 * The use, copying, transfer or disclosure of such information is prohibited
 * except by express written agreement with CS Communication and Systems Canada
 * Inc.
 */

package ca.cscanada.model;

/**
 *
 * @author tbdiri
 */
public class LoadSoftwareProgress
{

    String _name;
    String _progress;

    public LoadSoftwareProgress(String name, String progress)
    {
        _name = name;
        _progress = progress;
    }
    
    

    public String getName()
    {
        return _name;
    }

    public void setName(String name)
    {
        _name = name;
    }

    public String getProgress()
    {
        return _progress;
    }

    public void setProgress(String progress)
    {
        _progress = progress;
    }

}
